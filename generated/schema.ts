// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Idea extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Idea entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Idea entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Idea", id.toString(), this);
  }

  static load(id: string): Idea | null {
    return store.get("Idea", id) as Idea | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(value as Bytes));
    }
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get cost(): BigInt | null {
    let value = this.get("cost");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cost(value: BigInt | null) {
    if (value === null) {
      this.unset("cost");
    } else {
      this.set("cost", Value.fromBigInt(value as BigInt));
    }
  }

  get marketCapBefore(): BigDecimal | null {
    let value = this.get("marketCapBefore");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set marketCapBefore(value: BigDecimal | null) {
    if (value === null) {
      this.unset("marketCapBefore");
    } else {
      this.set("marketCapBefore", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get marketCap(): BigDecimal | null {
    let value = this.get("marketCap");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set marketCap(value: BigDecimal | null) {
    if (value === null) {
      this.unset("marketCap");
    } else {
      this.set("marketCap", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get createdAtBlockNumber(): BigInt | null {
    let value = this.get("createdAtBlockNumber");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAtBlockNumber(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAtBlockNumber");
    } else {
      this.set("createdAtBlockNumber", Value.fromBigInt(value as BigInt));
    }
  }

  get createdAtTimestamp(): BigInt | null {
    let value = this.get("createdAtTimestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAtTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAtTimestamp");
    } else {
      this.set("createdAtTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get trades(): Array<string> {
    let value = this.get("trades");
    return value.toStringArray();
  }

  set trades(value: Array<string>) {
    this.set("trades", Value.fromStringArray(value));
  }
}

export class Stat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stat entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stat entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stat", id.toString(), this);
  }

  static load(id: string): Stat | null {
    return store.get("Stat", id) as Stat | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalMarketCap(): BigDecimal | null {
    let value = this.get("totalMarketCap");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set totalMarketCap(value: BigDecimal | null) {
    if (value === null) {
      this.unset("totalMarketCap");
    } else {
      this.set("totalMarketCap", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Trade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Trade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Trade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Trade", id.toString(), this);
  }

  static load(id: string): Trade | null {
    return store.get("Trade", id) as Trade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(value as Bytes));
    }
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (value === null) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(value as BigInt));
    }
  }

  get cost(): BigInt | null {
    let value = this.get("cost");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cost(value: BigInt | null) {
    if (value === null) {
      this.unset("cost");
    } else {
      this.set("cost", Value.fromBigInt(value as BigInt));
    }
  }

  get marketCapBefore(): BigDecimal | null {
    let value = this.get("marketCapBefore");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set marketCapBefore(value: BigDecimal | null) {
    if (value === null) {
      this.unset("marketCapBefore");
    } else {
      this.set("marketCapBefore", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get marketCap(): BigDecimal | null {
    let value = this.get("marketCap");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set marketCap(value: BigDecimal | null) {
    if (value === null) {
      this.unset("marketCap");
    } else {
      this.set("marketCap", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}
