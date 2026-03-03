---
title: "std::generator"
source_path: "cpp/coroutine/generator"
header: "<generator>"
category: "coroutine"
since: "C++23"
---

1) The class template std::generator presents a [view](/cpp/ranges/view/) of the elements yielded by the evaluation of a [coroutine](/cpp/language/coroutines/).

## Declarations
```cpp
template<
class Ref,
class V = void,
class Allocator = void >
class generator
: public ranges::view_interface<generator<Ref, V, Allocator>>
```
_(since C++23)_

```cpp
namespace pmr {
template< class Ref, class V = void >
using generator =
std::generator<Ref, V, std::pmr::polymorphic_allocator<>>;
}
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generator
202207L
(C++23)
std::generator – synchronous coroutine generator for ranges

## Example
```cpp
#include <generator>
#include <iostream>
 
template<typename T>
struct Tree
{
    T value;
    Tree *left{}, *right{};
 
    std::generator<const T&> traverse_inorder() const
    {
        if (left)
            co_yield std::ranges::elements_of(left->traverse_inorder());
 
        co_yield value;
 
        if (right)
            co_yield std::ranges::elements_of(right->traverse_inorder());
    }
};
 
int main()
{
    Tree<char> tree[]
    {
                                    {'D', tree + 1, tree + 2},
        //                            │
        //            ┌───────────────┴────────────────┐
        //            │                                │
                    {'B', tree + 3, tree + 4},       {'F', tree + 5, tree + 6},
        //            │                                │
        //  ┌─────────┴─────────────┐      ┌───────────┴─────────────┐
        //  │                       │      │                         │
          {'A'},                  {'C'}, {'E'},                    {'G'}
    };
 
    for (char x : tree->traverse_inorder())
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## See also
- [noop_coroutine](/cpp/coroutine/noop_coroutine/)
