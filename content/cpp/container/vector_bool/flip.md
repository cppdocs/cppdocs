---
title: "std::vector<bool,Allocator>::flip"
source_path: "cpp/container/vector_bool/flip"
header: "<vector>"
category: "container"
---

Toggles each bool (replaces with its opposite value) in the [vector](/cpp/container/vector_bool/).

## Declarations
```cpp
void flip();
```
_(constexpr since C++20)_

## Example
```cpp
#include <iostream>
#include <vector>
 
void print(const std::vector<bool>& vb)
{
    for (const bool b : vb)
        std::cout << b;
    std::cout << '\n';
}
 
int main()
{
    std::vector<bool> v{0, 1, 0, 1};
    print(v);
    v.flip();
    print(v);
}
```

## See also
- [operator[]](/cpp/container/vector/operator_at/)
- [flip](/cpp/utility/bitset/flip/)
