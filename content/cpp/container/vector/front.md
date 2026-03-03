---
title: "std::vector<T,Allocator>::front"
source_path: "cpp/container/vector/front"
category: "container"
---

Returns a reference to the first element in the container.

## Declarations
```cpp
reference front();
```
_(constexpr since C++20)_

```cpp
const_reference front() const;
```
_(constexpr since C++20)_

## Return value
Reference to the first element.

## Notes
For a container c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <cassert>
#include <vector>
 
int main()
{
    std::vector<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [back](/cpp/container/vector/back/)
- [rendcrend](/cpp/container/vector/rend/)
- [begincbegin](/cpp/container/vector/begin/)
- [data](/cpp/container/vector/data/)
