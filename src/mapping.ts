import { BigInt, BigDecimal, Bytes, Address, log } from "@graphprotocol/graph-ts"
import {
  IdeaTokenFactory,
  IdeaTokenCreated,
  IdeaTokenBought,
  IdeaTokenSold
} from "../generated/Contract/IdeaTokenFactory"
import { IdeaToken } from "../generated/Contract/IdeaToken"
import { Idea, Stat, Trade } from "../generated/schema"

export function handleIdeaTokenCreated(event: IdeaTokenCreated): void {
  let idea = new Idea(event.params.newContractAddress.toHexString())

  let domain = domainFromAddress(event.params.newContractAddress)

  // Entity fields can be set based on event parameters
  idea.domain = domain
  idea.trades = []
  idea.createdAtBlockNumber = event.params.blockNumber
  idea.createdAtTimestamp = event.block.timestamp

  // Entities can be written to the store with `.save()`
  idea.save()
}


export function handleIdeaTokenBought(event: IdeaTokenBought): void {
  let idea = Idea.load(event.params.publicationAddress.toHexString())
  idea.cost = getTokenCost(event.params.publicationAddress)
  idea.buyer = event.params.buyer
  idea.marketCapBefore = fromWei(event.params.marketCapBefore)
  idea.marketCap = fromWei(event.params.marketCapAfter)
  
  idea.timestamp = event.params.timestamp
  let trade_id = event.transaction.hash.toHexString()

  let trades = idea.trades
  trades.push(trade_id)
  log.info('trades: ' + trades.join(' '), [])
  idea.trades = trades
  idea.save()
  
  let trade = new Trade(trade_id)

  trade.domain = idea.domain
  
  trade.seller = idea.seller
  trade.buyer = idea.buyer
  trade.price = idea.price
  trade.cost = idea.cost
  trade.marketCapBefore = idea.marketCapBefore
  trade.marketCap = idea.marketCap
  trade.timestamp = idea.timestamp

  trade.save()

  let stat = new Stat('0')
  stat.totalMarketCap = fromWei(event.params.totalMarketCap)
  stat.timestamp = event.params.timestamp
  stat.save()
}

export function handleIdeaTokenSold(event: IdeaTokenSold): void {
  let idea = Idea.load(event.params.publicationAddress.toHexString())
  idea.price = getTokenPrice(event.params.publicationAddress)
  idea.seller = event.params.seller
  idea.marketCapBefore = fromWei(event.params.marketCapBefore)
  idea.marketCap = fromWei(event.params.marketCapAfter)
  
  idea.timestamp = event.params.timestamp
  let trade_id = event.transaction.hash.toHexString()
  let trades = idea.trades
  trades.push(trade_id)
  idea.trades = trades

  log.info('trades: ' + trades.join(' '),[])
  idea.save()
  let trade = new Trade(trade_id)

  trade.domain = idea.domain
  
  trade.seller = idea.seller
  trade.buyer = idea.buyer
  trade.price = idea.price
  trade.cost = idea.cost
  trade.marketCapBefore = idea.marketCapBefore
  trade.marketCap = idea.marketCap
  trade.timestamp = idea.timestamp

  trade.save()

  let stat = new Stat('0')
  stat.totalMarketCap = fromWei(event.params.totalMarketCap)
  stat.timestamp = event.params.timestamp
  stat.save()
}

function fromWei(input: BigInt): BigDecimal {
  let wei = 10**18
  let delim = BigDecimal.fromString(wei.toString())
  let result = input.toBigDecimal().div(delim)
  return result
}

function domainFromAddress(address: Address): string {
  let ideaTokenContract = IdeaToken.bind(address)
  let domain = ideaTokenContract.name()
  return domain
}

function getTokenCost(address: Address): BigInt {
  let ideaTokenContract = IdeaToken.bind(address)
  let cost = ideaTokenContract.getCostOfBuyingTokens(BigInt.fromI32(1))
  return cost
}

function getTokenPrice(address: Address): BigInt {
  let ideaTokenContract = IdeaToken.bind(address)
  let price = ideaTokenContract.getPriceofSellingTokens(BigInt.fromI32(1))
  return price
}