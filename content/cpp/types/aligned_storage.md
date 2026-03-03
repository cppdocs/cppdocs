---
title: "std::aligned_storage"
source_path: "cpp/types/aligned_storage"
header: "<type_traits>"
category: "types"
---

Provides the nested type type, which satisfies [TrivialType](/cpp/named_req/trivialtype/) and [StandardLayoutType](/cpp/named_req/standardlayouttype/) and suitable for use as uninitialized storage for any object whose size is at most Len and whose [alignment requirement](/cpp/language/objects/#Alignment) is a divisor of Align.

## Declarations
```cpp
template< std::size_t Len, std::size_t Align = /* default-alignment */ >
struct aligned_storage;
```
_(since C++11) (deprecated in C++23)_

## Notes
The type defined by std::aligned_storage<>::type can be used to create uninitialized memory blocks suitable to hold the objects of given type, optionally aligned stricter than their natural alignment requirement, for example on a cache or page boundary.

As with any other uninitialized storage, the objects are created using [placement new](/cpp/language/new/) and destroyed with explicit destructor calls.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <new>
#include <string>
#include <type_traits>
 
template<class T, std::size_t N>
class static_vector
{
    // Properly aligned uninitialized storage for N T's
    std::aligned_storage_t<sizeof(T), alignof(T)> data[N];
    std::size_t m_size = 0;
 
public:
    // Create an object in aligned storage
    template<typename ...Args> void emplace_back(Args&&... args)
    {
        if (m_size >= N) // Possible error handling
            throw std::bad_alloc{};
 
        // Construct value in memory of aligned storage using inplace operator new
        ::new(&data[m_size]) T(std::forward<Args>(args)...);
        ++m_size;
    }
 
    // Access an object in aligned storage
    const T& operator[](std::size_t pos) const
    {
        // Note: std::launder is needed after the change of object model in P0137R1
        return *std::launder(reinterpret_cast<const T*>(&data[pos]));
    }
 
    // Destroy objects from aligned storage
    ~static_vector()
    {
        for (std::size_t pos = 0; pos < m_size; ++pos)
            // Note: std::launder is needed after the change of object model in P0137R1
            std::destroy_at(std::launder(reinterpret_cast<T*>(&data[pos])));
    }
};
 
int main()
{
    static_vector<std::string, 10> v1;
    v1.emplace_back(5, '*');
    v1.emplace_back(10, '*');
    std::cout << v1[0] << '\n' << v1[1] << '\n';
}
```

## See also
- [alignas](/cpp/language/alignas/)
- [alignment_of](/cpp/types/alignment_of/)
- [aligned_alloc](/cpp/memory/c/aligned_alloc/)
- [aligned_union](/cpp/types/aligned_union/)
- [max_align_t](/cpp/types/max_align_t/)
- [launder](/cpp/utility/launder/)
