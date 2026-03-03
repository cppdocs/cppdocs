---
title: "std::vector<T,Allocator>::reserve"
source_path: "cpp/container/vector/reserve"
category: "container"
---

Increase the capacity of the vector (the total number of elements that the vector can hold without requiring reallocation) to a value that's greater or equal to new_cap. If new_cap is greater than the current [capacity()](/cpp/container/vector/capacity/), new storage is allocated, otherwise the function does nothing.

## Declarations
```cpp
void reserve( size_type new_cap );
```
_(constexpr since C++20)_

## Parameters
- `new_cap`: new capacity of the vector, in number of elements

## Return value
(none)

## Notes
Correctly using reserve() can prevent unnecessary reallocations, but inappropriate uses of reserve() (for instance, calling it before every [push_back()](/cpp/container/vector/push_back/) call) may actually increase the number of reallocations (by causing the capacity to grow linearly rather than exponentially) and result in increased computational complexity and decreased performance. For example, a function that receives an arbitrary vector by reference and appends elements to it should usually not call reserve() on the vector, since it does not know of the vector's usage characteristics.

When inserting a range, the range version of [insert()](/cpp/container/vector/insert/) is generally preferable as it preserves the correct capacity growth behavior, unlike reserve() followed by a series of [push_back()](/cpp/container/vector/push_back/)s.

reserve() cannot be used to reduce the capacity of the container; to that end [shrink_to_fit()](/cpp/container/vector/shrink_to_fit/) is provided.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <new>
#include <vector>
 
// minimal C++11 allocator with debug output
template<class Tp>
struct NAlloc
{
    typedef Tp value_type;
 
    NAlloc() = default;
    template<class T>
    NAlloc(const NAlloc<T>&) {}
 
    Tp* allocate(std::size_t n)
    {
        n *= sizeof(Tp);
        Tp* p = static_cast<Tp*>(::operator new(n));
        std::cout << "allocating " << n << " bytes @ " << p << '\n';
        return p;
    }
 
    void deallocate(Tp* p, std::size_t n)
    {
        std::cout << "deallocating " << n * sizeof *p << " bytes @ " << p << "\n\n";
        ::operator delete(p);
    }
};
 
template<class T, class U>
bool operator==(const NAlloc<T>&, const NAlloc<U>&) { return true; }
 
template<class T, class U>
bool operator!=(const NAlloc<T>&, const NAlloc<U>&) { return false; }
 
int main()
{
    constexpr int max_elements = 32;
 
    std::cout << "using reserve: \n";
    {
        std::vector<int, NAlloc<int>> v1;
        v1.reserve(max_elements); // reserves at least max_elements * sizeof(int) bytes
 
        for (int n = 0; n < max_elements; ++n)
            v1.push_back(n);
    }
 
    std::cout << "not using reserve: \n";
    {
        std::vector<int, NAlloc<int>> v1;
 
        for (int n = 0; n < max_elements; ++n)
        {
            if (v1.size() == v1.capacity())
                std::cout << "size() == capacity() == " << v1.size() << '\n';
            v1.push_back(n);
        }
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 329 | C++98 | reallocation might be triggered if an insertionmakes the size of the vector greater than the sizespecified in the most recent call to reserve() | only triggers if the sizeof the vector becomesgreater than capacity() |
| LWG 2033 | C++11 | T was not required to be MoveInsertable | required |

## See also
- [capacity](/cpp/container/vector/capacity/)
- [max_size](/cpp/container/vector/max_size/)
- [resize](/cpp/container/vector/resize/)
- [shrink_to_fit](/cpp/container/vector/shrink_to_fit/)
