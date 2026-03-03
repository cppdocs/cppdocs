---
title: "std::experimental::optional<T>::emplace"
source_path: "cpp/experimental/optional/emplace"
category: "experimental"
---

Constructs the contained value in-place. If *this already contains a value before the call, the contained value is destroyed by calling its destructor.

## Declarations
```cpp
template< class... Args >
void emplace( Args&&... args );
```
_(library fundamentals TS)_

```cpp
template< class U, class... Args >
void emplace( std::initializer_list<U> ilist, Args&&... args );
```
_(library fundamentals TS)_

## Parameters
- `args...`: the arguments to pass to the constructor
- `ilist`: the initializer list to pass to the constructor

## Return value
(none)

## See also
- [operator=](/cpp/experimental/optional/operator/)
