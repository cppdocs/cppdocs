---
title: "std::forward_list<T,Allocator>::front"
source_path: "cpp/container/forward_list/front"
category: "container"
since: "C++11"
---

Returns a reference to the first element in the container.

## Declarations
```cpp
reference front();
```
_(since C++11)_

```cpp
const_reference front() const;
```
_(since C++11)_

## Return value
Reference to the first element.

## Notes
For a container c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <cassert>
#include <forward_list>
 
int main()
{
    std::forward_list<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [before_begincbefore_begin](/cpp/container/forward_list/before_begin/)
- [begincbegin](/cpp/container/forward_list/begin/)
