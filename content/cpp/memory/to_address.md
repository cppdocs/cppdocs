---
title: "std::to_address"
source_path: "cpp/memory/to_address"
header: "<memory>"
category: "memory"
since: "C++20"
---

Obtain the address represented by p without forming a reference to the object pointed to by p.

## Declarations
```cpp
template< class Ptr >
constexpr auto to_address( const Ptr& p ) noexcept;
```
_(since C++20)_

```cpp
template< class T >
constexpr T* to_address( T* p ) noexcept;
```
_(since C++20)_

## Parameters
- `p`: fancy or raw pointer

## Return value
Raw pointer that represents the same address as p does.

## Notes
std::to_address can be used even when p does not reference storage that has an object constructed in it, in which case [std::addressof](/cpp/memory/addressof/)(*p) cannot be used because there is no valid object for the parameter of [std::addressof](/cpp/memory/addressof/) to bind to.

The fancy pointer overload of std::to_address inspects the [std::pointer_traits](/cpp/memory/pointer_traits/)<Ptr> specialization. If instantiating that specialization is itself ill-formed (typically because element_type cannot be defined), that results in a hard error outside the immediate context and renders the program ill-formed.

std::to_address may additionally be used on iterators that satisfy [std::contiguous_iterator](/cpp/iterator/contiguous_iterator/).

## Example
```cpp
#include <memory>
 
template<class A>
auto allocator_new(A& a)
{
    auto p = a.allocate(1);
    try
    {
        std::allocator_traits<A>::construct(a, std::to_address(p));
    }
    catch (...)
    {
        a.deallocate(p, 1);
        throw;
    }
    return p;
}
 
template<class A>
void allocator_delete(A& a, typename std::allocator_traits<A>::pointer p)
{
    std::allocator_traits<A>::destroy(a, std::to_address(p));
    a.deallocate(p, 1);
}
 
int main()
{
    std::allocator<int> a;
    auto p = allocator_new(a);
    allocator_delete(a, p);
}
```

## See also
- [pointer_traits](/cpp/memory/pointer_traits/)
- [to_address](/cpp/memory/pointer_traits/to_address/)
