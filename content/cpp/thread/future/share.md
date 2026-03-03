---
title: "std::future<T>::share"
source_path: "cpp/thread/future/share"
category: "thread"
---

Transfers the shared state of *this, if any, to a [std::shared_future](/cpp/thread/shared_future/) object. Multiple [std::shared_future](/cpp/thread/shared_future/) objects may reference the same shared state, which is not possible with [std::future](/cpp/thread/future/).

## Declarations
```cpp
std::shared_future<T> share() noexcept;
```

## Return value
A [std::shared_future](/cpp/thread/shared_future/) object containing the shared state previously held by *this, if any, constructed as if by [std::shared_future](/cpp/thread/shared_future/)<T>(std::move(*this)).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2556 | C++11 | share() requires valid() to be true | requirement removed and made noexcept |

## See also
- [shared_future](/cpp/thread/shared_future/)
