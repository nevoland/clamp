[**@nevoland/clamp**](../README.md) • **Docs**

***

[@nevoland/clamp](../README.md) / isClamped

# Function: isClamped()

> **isClamped**(`value`, `a`, `b`): `boolean`

Checks if a value is clamped within a specified range.

The bounds are automatically reversed if `a` is larger than `b`.

## Parameters

• **value**: `number`

The value to check.

• **a**: `number` = `-Infinity`

The minimum bound, defaulting to `-Infinity` if `undefined`.

• **b**: `number` = `Infinity`

The maximum bound, defaulting to `+Infinity` if `undefined`.

## Returns

`boolean`

True if the value is within the range [min, max], false otherwise.

## Defined in

[isClamped.ts:11](https://github.com/nevoland/clamp/blob/73ed661d5691f8915a6907088cd9b6b95c5873d2/lib/isClamped.ts#L11)
