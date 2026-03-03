---
title: "std::shared_ptr<T>::owner_before"
source_path: "cpp/memory/shared_ptr/owner_before"
category: "memory"
---

Checks whether this shared_ptr precedes other in implementation defined owner-based (as opposed to value-based) order. The order is such that two smart pointers compare equivalent only if they are both empty or if they both own the same object, even if the values of the pointers obtained by [get()](/cpp/memory/shared_ptr/get/) are different (e.g. because they point at different subobjects within the same object).

## Declarations
```cpp
template< class Y >
bool owner_before( const shared_ptr<Y>& other ) const noexcept;
```

```cpp
template< class Y >
bool owner_before( const std::weak_ptr<Y>& other ) const noexcept;
```

## Parameters
- `other`: the std::shared_ptr or std::weak_ptr to be compared

## Return value
true if *this precedes other, false otherwise. Common implementations compare the addresses of the control blocks.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    int n1;
    int n2; 
    Foo(int a, int b) : n1(a), n2(b) {}
};
 
int main()
{   
    auto p1 = std::make_shared<Foo>(1, 2);
    std::shared_ptr<int> p2(p1, &p1->n1);
    std::shared_ptr<int> p3(p1, &p1->n2);
 
    std::cout << std::boolalpha
              << "p2 < p3 " << (p2 < p3) << '\n'
              << "p3 < p2 " << (p3 < p2) << '\n'
              << "p2.owner_before(p3) " << p2.owner_before(p3) << '\n'
              << "p3.owner_before(p2) " << p3.owner_before(p2) << '\n';
 
    std::weak_ptr<int> w2(p2);
    std::weak_ptr<int> w3(p3);
    std::cout 
//            << "w2 < w3 " << (w2 < w3) << '\n' // won't compile 
//            << "w3 < w2 " << (w3 < w2) << '\n' // won't compile
              << "w2.owner_before(w3) " << w2.owner_before(w3) << '\n'
              << "w3.owner_before(w2) " << w3.owner_before(w2) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2873 | C++11 | owner_before was not declared noexcept | declared noexcept |

## See also
- [owner_less](/cpp/memory/owner_less/)
