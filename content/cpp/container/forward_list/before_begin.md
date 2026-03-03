---
title: "std::forward_list<T,Allocator>::before_begin, cbefore_begin"
source_path: "cpp/container/forward_list/before_begin"
category: "container"
since: "C++11"
---

Returns an iterator to the element before the first element of the container. This element acts as a placeholder, attempting to access it results in undefined behavior. The only usage cases are in functions [insert_after()](/cpp/container/forward_list/insert_after/), [emplace_after()](/cpp/container/forward_list/emplace_after/), [erase_after()](/cpp/container/forward_list/erase_after/), [splice_after()](/cpp/container/forward_list/splice_after/) and the increment operator: incrementing the before-begin iterator gives exactly the same iterator as obtained from [begin()](/cpp/container/forward_list/begin/)/[cbegin()](/cpp/container/forward_list/begin/).

## Declarations
```cpp
iterator before_begin() noexcept;
```
_(since C++11)_

```cpp
const_iterator before_begin() const noexcept;
```
_(since C++11)_

```cpp
const_iterator cbefore_begin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the element before the first element.

## Example
This section is incompleteReason: no example

## See also
- [begincbegin](/cpp/container/forward_list/begin/)
- [endcend](/cpp/container/forward_list/end/)
