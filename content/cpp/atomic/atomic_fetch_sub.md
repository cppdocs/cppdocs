---
title: "std::atomic_fetch_sub, std::atomic_fetch_sub_explicit"
source_path: "cpp/atomic/atomic_fetch_sub"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Performs atomic subtraction. Atomically subtracts arg from the value pointed to by obj and returns the value obj held previously. The operation is performed as if the following was executed:

## Declarations
```cpp
template< class T >
T atomic_fetch_sub( std::atomic<T>* obj,
typename std::atomic<T>::difference_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_sub( volatile std::atomic<T>* obj,
typename std::atomic<T>::difference_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_sub_explicit( std::atomic<T>* obj,
typename std::atomic<T>::difference_type arg,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_sub_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::difference_type arg,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `arg`: the value to subtract from the value stored in the atomic object
- `order`: the memory synchronization ordering

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *obj.

## Example
```cpp
#include <atomic>
#include <iostream>
#include <numeric>
#include <string>
#include <thread>
#include <vector>
 
const int N = 50;
std::atomic<int> cnt;
std::vector<int> data(N);
 
void reader(int id) 
{
    for (;;)
    {
        int idx = atomic_fetch_sub_explicit(&cnt, 1, std::memory_order_relaxed);
        if (idx >= 0)
            std::cout << "reader " << std::to_string(id) << " processed item "
                      << std::to_string(data[idx]) << '\n';
        else
        {
            std::cout << "reader " << std::to_string(id) << " done\n";
            break;
        }
    }
}
 
int main()
{
    std::iota(data.begin(), data.end(), 1);
    cnt = data.size() - 1;
 
    std::vector<std::thread> v;
    for (int n = 0; n < 5; ++n)
        v.emplace_back(reader, n);
    for (auto& t : v)
        t.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [fetch_sub](/cpp/atomic/atomic/fetch_sub/)
- [atomic_fetch_addatomic_fetch_add_explicit](/cpp/atomic/atomic_fetch_add/)
- [C documentation](/c/atomic/atomic_fetch_sub/)
