---
title: "std::deque<T,Allocator>::operator[]"
source_path: "cpp/container/deque/operator_at"
category: "container"
---

Returns a reference to the element at specified location pos. No bounds checking is performed.

## Declarations
```cpp
reference operator[]( size_type pos );
```

```cpp
const_reference operator[]( size_type pos ) const;
```

## Parameters
- `pos`: position of the element to return

## Return value
Reference to the requested element.

## Notes
Unlike [std::map::operator[]](/cpp/container/map/operator_at/), this operator never inserts a new element into the container. Accessing a nonexistent element through this operator is undefined behavior.

## Example
```cpp
#include <deque>
#include <iostream>
 
int main()
{
    std::deque<int> numbers{2, 4, 6, 8};
 
    std::cout << "Second element: " << numbers[1] << '\n';
 
    numbers[0] = 5;
 
    std::cout << "All numbers:";
    for (auto i : numbers)
        std::cout << ' ' << i;
    std::cout << '\n';
}
```

## See also
- [at](/cpp/container/deque/at/)
