---
title: "std::generator<Ref,V,Allocator>::begin"
source_path: "cpp/coroutine/generator/begin"
category: "coroutine"
since: "C++23"
---

Pushes [coroutine_](/cpp/coroutine/generator/#Data_members) into *[active_](/cpp/coroutine/generator/#Data_members) stack, then evaluates coroutine_.resume().

## Declarations
```cpp
/*iterator*/ begin();
```
_(since C++23)_

## Return value
An iterator whose coroutine_ member refers to the same coroutine as [coroutine_](/cpp/coroutine/generator/#Data_members) does.

## Notes
It is an undefined behavior to call begin() more than once on the same [generator](/cpp/coroutine/generator/) object.

## Example
This section is incompleteReason: no example
