---
title: "std::weak_ptr<T>::reset"
source_path: "cpp/memory/weak_ptr/reset"
category: "memory"
since: "C++11"
---

Releases the reference to the managed object. After the call *this manages no object.

## Declarations
```cpp
void reset() noexcept;
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    auto shared = std::make_shared<int>(), shared2 = shared, shared3 = shared2;
 
    auto weak = std::weak_ptr<int>{shared};
 
    std::cout << std::boolalpha 
              << "shared.use_count(): " << shared.use_count() << '\n'
              << "weak.use_count(): " << weak.use_count() << '\n'
              << "weak.expired(): " << weak.expired() << '\n';
 
    weak.reset();
 
    std::cout << "weak.reset();\n"
              << "shared.use_count(): " << shared.use_count() << '\n'
              << "weak.use_count(): " << weak.use_count() << '\n'
              << "weak.expired(): " << weak.expired() << '\n';
}
```

## See also
- [expired](/cpp/memory/weak_ptr/expired/)
