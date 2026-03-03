---
title: "std::experimental::make_optional"
source_path: "cpp/experimental/optional/make_optional"
header: "<experimental/optional>"
category: "experimental"
---

Creates an optional object from value. Effectively calls
optional<typename [std::decay](/cpp/types/decay/)<T>::type>([std::forward](/cpp/utility/forward/)<T>(value)).

## Declarations
```cpp
template< class T >
constexpr optional<typename std::decay<T>::type>
make_optional( T&& value );
```
_(library fundamentals TS)_

## Parameters
- `value`: the value to construct optional object with

## Return value
An optional object with value as the contained value.

## See also
- [(constructor)](/cpp/experimental/optional/optional/)
