---
title: "std::move"
source_path: "cpp/algorithm/move"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Moves the elements in the range [first,last), to another range beginning at d_first, starting from first and proceeding to last. After this operation the elements in the moved-from range will still contain valid values of the appropriate type, but not necessarily the same values as before the move.

## Declarations
```cpp
template< class InputIt, class OutputIt >
OutputIt move( InputIt first, InputIt last,
OutputIt d_first );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
ForwardIt2 move( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to move
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use

## Return value
The iterator to the element past the last element moved.

## Notes
When moving overlapping ranges, std::move is appropriate when moving to the left (beginning of the destination range is outside the source range) while [std::move_backward](/cpp/algorithm/move_backward/) is appropriate when moving to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <chrono>
#include <iostream>
#include <iterator>
#include <list>
#include <thread>
#include <vector>
 
void f(int n)
{
    std::this_thread::sleep_for(std::chrono::seconds(n));
    std::cout << "thread " << n << " ended" << std::endl;
}
 
int main()
{
    std::vector<std::jthread> v;
    v.emplace_back(f, 1);
    v.emplace_back(f, 2);
    v.emplace_back(f, 3);
    std::list<std::jthread> l;
 
    // copy() would not compile, because std::jthread is noncopyable
    std::move(v.begin(), v.end(), std::back_inserter(l));
}
```

## See also
- [move_backward](/cpp/algorithm/move_backward/)
- [move](/cpp/utility/move/)
- [ranges::move](/cpp/algorithm/ranges/move/)
