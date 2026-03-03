---
title: "std::priority_queue<T,Container,Compare>::operator="
source_path: "cpp/container/priority_queue/operator"
category: "container"
---

Replaces the contents of the container adaptor with the contents of given argument.

## Declarations
```cpp
priority_queue& operator=( const priority_queue& other );
```
_(implicitly declared)_

```cpp
priority_queue& operator=( priority_queue&& other );
```
_(since C++11) (implicitly declared)_

## Parameters
- `other`: another container adaptor to be used as source

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/container/priority_queue/priority_queue/)
