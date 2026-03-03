---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::emplace_hint"
source_path: "cpp/container/unordered_map/emplace_hint"
category: "container"
since: "C++11"
---

Inserts a new element into the container, using hint as a suggestion where the element should go.

## Declarations
```cpp
template< class... Args >
iterator emplace_hint( const_iterator hint, Args&&... args );
```
_(since C++11)_

## Parameters
- `hint`: iterator, used as a suggestion as to where to insert the new element
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element, or to the element that prevented the insertion.

## Example
```cpp
#include <chrono>
#include <cstddef>
#include <functional>
#include <iomanip>
#include <iostream>
#include <unordered_map>
 
const int n_operations = 100'500'0;
 
std::size_t map_emplace()
{
    std::unordered_map<int, char> map;
    for (int i = 0; i < n_operations; ++i)
        map.emplace(i, 'a');
    return map.size();
}
 
std::size_t map_emplace_hint()
{
    std::unordered_map<int, char> map;
    auto it = map.begin();
    for (int i = 0; i < n_operations; ++i)
    {
        map.emplace_hint(it, i, 'b');
        it = map.end();
    }
    return map.size();
}
 
std::size_t map_emplace_hint_wrong()
{
    std::unordered_map<int, char> map;
    auto it = map.begin();
    for (int i = n_operations; i > 0; --i)
    {
        map.emplace_hint(it, i, 'c');
        it = map.end();
    }
    return map.size();
}
 
std::size_t map_emplace_hint_corrected()
{
    std::unordered_map<int, char> map;
    auto it = map.begin();
    for (int i = n_operations; i > 0; --i)
    {
        map.emplace_hint(it, i, 'd');
        it = map.begin();
    }
    return map.size();
}
 
std::size_t map_emplace_hint_closest()
{
    std::unordered_map<int, char> map;
    auto it = map.begin();
    for (int i = 0; i < n_operations; ++i)
        it = map.emplace_hint(it, i, 'e');
    return map.size();
}
 
double time_it(std::function<std::size_t()> map_test,
               std::string what = "", double ratio = 0.0)
{
    const auto start = std::chrono::system_clock::now();
    const std::size_t map_size = map_test();
    const auto stop = std::chrono::system_clock::now();
    std::chrono::duration<double, std::milli> time = stop - start;
    if (what.size() && map_size)
        std::cout << std::setw(8) << time << " for " << what << " (ratio: "
                  << (ratio == 0.0 ? 1.0 : ratio / time.count()) << ")\n";
    return time.count();
}
 
int main()
{
    std::cout << std::fixed << std::setprecision(2);
    time_it(map_emplace); // cache warmup
    const auto x = time_it(map_emplace, "plain emplace");
    time_it(map_emplace_hint, "emplace with correct hint", x);
    time_it(map_emplace_hint_wrong, "emplace with wrong hint", x);
    time_it(map_emplace_hint_corrected, "corrected emplace", x);
    time_it(map_emplace_hint_closest, "emplace using returned iterator", x);
}
```

## See also
- [emplace](/cpp/container/unordered_map/emplace/)
- [insert](/cpp/container/unordered_map/insert/)
