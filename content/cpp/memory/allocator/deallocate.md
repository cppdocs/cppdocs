---
title: "std::allocator<T>::deallocate"
source_path: "cpp/memory/allocator/deallocate"
category: "memory"
---

Deallocates the storage referenced by the pointer p, which must be a pointer obtained by an earlier call to [allocate()](/cpp/memory/allocator/allocate/)or [allocate_at_least()](/cpp/memory/allocator/allocate_at_least/)(since C++23).

## Declarations
```cpp
void deallocate( T* p, std::size_t n );
```
_(constexpr since C++20)_

## Parameters
- `p`: pointer obtained from allocate() or allocate_at_least()(since C++23)
- `n`: number of objects earlier passed to allocate(), or a number between requested and actually allocated number of objects via allocate_at_least() (may be equal to either bound)(since C++23)

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>
#include <memory>
#include <string>
 
class S
{
    inline static int n{1};
    int m{};
    void pre() const { std::cout << "#" << m << std::string(m, ' '); }
public:
    S(int x) : m{n++} { pre(); std::cout << "S::S(" << x << ");\n"; }
    ~S() { pre(); std::cout << "S::~S();\n"; }
    void id() const { pre(); std::cout << "S::id();\n"; }
};
 
int main()
{
    constexpr std::size_t n{4};
    std::allocator<S> allocator;
    try
    {
        S* s = allocator.allocate(n); // may throw
        for (std::size_t i{}; i != n; ++i)
        {
        //  allocator.construct(&s[i], i + 42); // removed in C++20
            std::construct_at(&s[i], i + 42);   // since C++20
        }
        std::for_each_n(s, n, [](const auto& e) { e.id(); });
        std::destroy_n(s, n);
        allocator.deallocate(s, n);
    }
    catch (std::bad_array_new_length const& ex) { std::cout << ex.what() << '\n'; }
    catch (std::bad_alloc const& ex) { std::cout << ex.what() << '\n'; }
}
```

## See also
- [allocate](/cpp/memory/allocator/allocate/)
- [allocate_at_least](/cpp/memory/allocator/allocate_at_least/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
