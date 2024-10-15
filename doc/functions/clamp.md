[**@nevoland/clamp**](../README.md) • **Docs**

***

[@nevoland/clamp](../README.md) / clamp

# Function: clamp()

> **clamp**(`value`, `a`, `b`): `number`

Clamps a value between a range delimited by two numbers.

The bounds are automatically reversed if `a` is larger than `b`. However, each parameter has a specific default: `a` defaults to `-Infinity` and `b` defaults to `+Infinity`.

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

[clamp.ts:11](https://github.com/nevoland/clamp/blob/8fcc488ba2ef699e665052ae2279623680b70a62/lib/clamp.ts#L11)
