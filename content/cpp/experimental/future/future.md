---
title: "std::experimental::future<T>::future"
source_path: "cpp/experimental/future/future"
category: "experimental"
---

1) Default constructor. Constructs an empty future object that does not refer to a shared state.

## Declarations
```cpp
future() noexcept;
```

```cpp
future( std::experimental::future<T>&& f ) noexcept;
```

```cpp
future( const std::experimental::future<T>& ) = delete;
```

```cpp
future( std::experimental::future<std::experimental::future<T>> && other ) noexcept;
```

## Parameters
- `f`: another future object to initialize with
- `other`: a std::experimental::future object to unwrap

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2697 | Concurrency TS | behavior of unwrapping constructor is unclear with an invalid future | constructs an empty future |

## See also
- [(constructor)](/cpp/thread/future/future/)
