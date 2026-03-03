---
title: "std::queue<T,Container>::operator="
source_path: "cpp/container/queue/operator"
category: "container"
---

Replaces the contents of the container adaptor with the contents of given argument.

## Declarations
```cpp
queue& operator=( const queue& other );
```
_(implicitly declared)_

```cpp
queue& operator=( queue&& other );
```
_(since C++11) (implicitly declared)_

## Parameters
- `other`: another container adaptor to be used as source

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/container/queue/queue/)
