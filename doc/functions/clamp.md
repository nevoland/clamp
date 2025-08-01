[**@nevoland/clamp**](../README.md) • **Docs**

***

[@nevoland/clamp](../README.md) / clamp

# Function: clamp()

> **clamp**(`value`, `a`, `b`): `number`

Clamps a value between a range delimited by two numbers.

The bounds are automatically reversed if `a` is larger than `b`.

## Parameters

• **value**: `number`

The value to clamp.

• **a**: `number` = `-Infinity`

The minimum bound, defaulting to `-Infinity` if `undefined`.

• **b**: `number` = `+Infinity`

The maximum bound, defaulting to `+Infinity` if `undefined`.

## Returns

`number`

The clamped value.

## Defined in

[clamp.ts:11](https://github.com/nevoland/clamp/blob/73ed661d5691f8915a6907088cd9b6b95c5873d2/lib/clamp.ts#L11)
