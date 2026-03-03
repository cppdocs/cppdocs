---
title: "std::flat_set<Key,Compare,KeyContainer>::emplace_hint"
source_path: "cpp/container/flat_set/emplace_hint"
category: "container"
since: "C++23"
---

Inserts a new element into the container as close as possible to the position just before hint.

## Declarations
```cpp
template< class... Args >
iterator emplace_hint( const_iterator hint, Args&&... args );
```
_(since C++23)_

## Parameters
- `hint`: iterator to the position before which the new element will be inserted
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
#include <flat_set>
 
const int n_operations = 100'500'0;
 
std::size_t set_emplace()
{
    std::flat_set<int> set;
    for (int i = 0; i < n_operations; ++i)
        set.emplace(i);
    return set.size();
}
 
std::size_t set_emplace_hint()
{
    std::flat_set<int> set;
    auto it = set.begin();
    for (int i = 0; i < n_operations; ++i)
    {
        set.emplace_hint(it, i);
        it = set.end();
    }
    return set.size();
}
 
std::size_t set_emplace_hint_wrong()
{
    std::flat_set<int> set;
    auto it = set.begin();
    for (int i = n_operations; i > 0; --i)
    {
        set.emplace_hint(it, i);
        it = set.end();
    }
    return set.size();
}
 
std::size_t set_emplace_hint_corrected()
{
    std::flat_set<int> set;
    auto it = set.begin();
    for (int i = n_operations; i > 0; --i)
    {
        set.emplace_hint(it, i);
        it = set.begin();
    }
    return set.size();
}
 
std::size_t set_emplace_hint_closest()
{
    std::flat_set<int> set;
    auto it = set.begin();
    for (int i = 0; i < n_operations; ++i)
        it = set.emplace_hint(it, i);
    return set.size();
}
 
double time_it(std::function<std::size_t()> set_test,
               const char* what = nullptr,
               double ratio = 0.0)
{
    const auto start = std::chrono::system_clock::now();
    const std::size_t setsize = set_test();
    const auto stop = std::chrono::system_clock::now();
    const std::chrono::duration<double, std::milli> time = stop - start;
    if (what != nullptr && setsize > 0)
        std::cout << std::setw(8) << time << " for " << what << " (ratio: "
                  << (ratio == 0.0 ? 1.0 : ratio / time.count()) << ")\n";
    return time.count();
}
 
int main()
{
    std::cout << std::fixed << std::setprecision(2);
    time_it(set_emplace); // cache warmup
    const auto x = time_it(set_emplace, "plain emplace");
    time_it(set_emplace_hint, "emplace with correct hint", x);
    time_it(set_emplace_hint_wrong, "emplace with wrong hint", x);
    time_it(set_emplace_hint_corrected, "corrected emplace", x);
    time_it(set_emplace_hint_closest, "emplace using returned iterator", x);
}
```

## See also
- [emplace](/cpp/container/flat_set/emplace/)
- [insert](/cpp/container/flat_set/insert/)
