---
title: "std::deque<T,Allocator>::shrink_to_fit"
source_path: "cpp/container/deque/shrink_to_fit"
category: "container"
---

Requests the removal of unused capacity.

## Declarations
```cpp
void shrink_to_fit();
```

## Notes
In libstdc++, shrink_to_fit() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <cstddef>
#include <deque>
#include <iostream>
#include <new>
 
// Minimal C++11 allocator with debug output.
template<class Tp>
struct NAlloc
{
    typedef Tp value_type;
 
    NAlloc() = default;
 
    template<class T> NAlloc(const NAlloc<T>&) {}
 
    Tp* allocate(std::size_t n)
    {
        n *= sizeof(Tp);
        std::cout << "allocating " << n << " bytes\n";
        return static_cast<Tp*>(::operator new(n));
    }
 
    void deallocate(Tp* p, std::size_t n)
    {
        std::cout << "deallocating " << n*sizeof*p << " bytes\n";
        ::operator delete(p);
    }
};
template<class T, class U>
bool operator==(const NAlloc<T>&, const NAlloc<U>&) { return true; }
template<class T, class U>
bool operator!=(const NAlloc<T>&, const NAlloc<U>&) { return false; }
 
int main()
{
    // std::queue has no capacity() function (like std::vector).
    // Because of this, we use a custom allocator to show the
    // working of shrink_to_fit.
 
    std::cout << "Default-construct deque:\n";
    std::deque<int, NAlloc<int>> deq;
 
    std::cout << "\nAdd 300 elements:\n";
    for (int i = 1000; i < 1300; ++i)
        deq.push_back(i);
 
    std::cout << "\nPop 100 elements:\n";
    for (int i = 0; i < 100; ++i)
        deq.pop_front();
 
    std::cout << "\nRun shrink_to_fit:\n";
    deq.shrink_to_fit();
 
    std::cout << "\nDestroy deque as it goes out of scope:\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 850 | C++98 | std::deque lacked explicit shrink-to-fit operations | provided |
| LWG 2033 | C++98C++11 | 1. the complexity requirement was missing (C++98)2. T was not required to be MoveInsertable (C++11) | 1. added2. required |
| LWG 2223 | C++98C++11 | 1. references, pointers, and iterators were not invalidated (C++98)2. there was no exception safety guarantee (C++11) | 1. they may be invalidated2. added |

## See also
- [size](/cpp/container/deque/size/)
