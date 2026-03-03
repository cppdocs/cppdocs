---
title: "std::priority_queue"
source_path: "cpp/container/priority_queue"
header: "<queue>"
---

The [priority queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) is a [container adaptor](/cpp/container/#Container_adaptors) that provides constant time lookup of the largest (by default) element, at the expense of logarithmic insertion and extraction.

## Declarations
```cpp
template<
class T,
class Container = std::vector<T>,
class Compare = std::less<typename Container::value_type>
> class priority_queue;
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion for containers

## Example
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <string_view>
#include <vector>
 
template<typename T>
void pop_println(std::string_view rem, T& pq)
{
    std::cout << rem << ": ";
    for (; !pq.empty(); pq.pop())
        std::cout << pq.top() << ' ';
    std::cout << '\n';
}
 
template<typename T>
void println(std::string_view rem, const T& v)
{
    std::cout << rem << ": ";
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    const auto data = {1, 8, 5, 6, 3, 4, 0, 9, 7, 2};
    println("data", data);
 
    std::priority_queue<int> max_priority_queue;
 
    // Fill the priority queue.
    for (int n : data)
        max_priority_queue.push(n);
 
    pop_println("max_priority_queue", max_priority_queue);
 
    // std::greater<int> makes the max priority queue act as a min priority queue.
    std::priority_queue<int, std::vector<int>, std::greater<int>>
        min_priority_queue1(data.begin(), data.end());
 
    pop_println("min_priority_queue1", min_priority_queue1);
 
    // Second way to define a min priority queue.
    std::priority_queue min_priority_queue2(data.begin(), data.end(), std::greater<int>());
 
    pop_println("min_priority_queue2", min_priority_queue2);
 
    // Using a custom function object to compare elements.
    struct
    {
        bool operator()(const int l, const int r) const { return l > r; }
    } customLess;
 
    std::priority_queue custom_priority_queue(data.begin(), data.end(), customLess);
 
    pop_println("custom_priority_queue", custom_priority_queue);
 
    // Using lambda to compare elements.
    auto cmp = [](int left, int right) { return (left ^ 1) < (right ^ 1); };
    std::priority_queue<int, std::vector<int>, decltype(cmp)> lambda_priority_queue(cmp);
 
    for (int n : data)
        lambda_priority_queue.push(n);
 
    pop_println("lambda_priority_queue", lambda_priority_queue);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 307 | C++98 | Container could not be std::vector<bool> | allowed |
| LWG 2566 | C++98 | Missing the requirement for Container::value_type | ill-formed if T is not the same type as Container::value_type |
| LWG 2684 | C++98 | priority_queue takes a comparatorbut lacked member typedef for it | added |

## See also
- [vector](/cpp/container/vector/)
- [vector<bool>](/cpp/container/vector_bool/)
- [deque](/cpp/container/deque/)
