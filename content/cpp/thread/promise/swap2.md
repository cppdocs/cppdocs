---
title: "std::swap(std::promise)"
source_path: "cpp/thread/promise/swap2"
header: "<future>"
category: "thread"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::promise](/cpp/thread/promise/). Exchanges the shared state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class R >
void swap( promise<R>& lhs, promise<R>& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: promises whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/promise/swap/)
