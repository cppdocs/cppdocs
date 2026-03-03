---
title: "std::set<Key,Compare,Allocator>::emplace"
source_path: "cpp/container/set/emplace"
category: "container"
since: "C++11"
---

Inserts a new element into the container constructed in-place with the given args, if there is no element with the key in the container.

## Declarations
```cpp
template< class... Args >
std::pair<iterator, bool> emplace( Args&&... args );
```
_(since C++11)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
A pair consisting of an iterator to the inserted element (or to the element that prevented the insertion) and a bool value set to true if and only if the insertion took place.

## Example
```cpp
#include <chrono>
#include <cstddef>
#include <functional>
#include <iomanip>
#include <iostream>
#include <string>
#include <set>
 
class Dew
{
private:
    int a, b, c;
 
public:
    Dew(int _a, int _b, int _c)
        : a(_a), b(_b), c(_c)
    {}
 
    bool operator<(const Dew& other) const
    {
        return (a < other.a) ||
               (a == other.a && b < other.b) ||
               (a == other.a && b == other.b && c < other.c);
    }
};
 
constexpr int nof_operations{101};
 
std::size_t set_emplace()
{
    std::set<Dew> set;
    for (int i = 0; i < nof_operations; ++i)
        for (int j = 0; j < nof_operations; ++j)
            for (int k = 0; k < nof_operations; ++k)
                set.emplace(i, j, k);
 
    return set.size();
}
 
std::size_t set_insert()
{
    std::set<Dew> set;
    for (int i = 0; i < nof_operations; ++i)
        for (int j = 0; j < nof_operations; ++j)
            for (int k = 0; k < nof_operations; ++k)
                set.insert(Dew(i, j, k));
 
    return set.size();
}
 
void time_it(std::function<int()> set_test, std::string what = "")
{
    const auto start = std::chrono::system_clock::now();
    const auto the_size = set_test();
    const auto stop = std::chrono::system_clock::now();
    const std::chrono::duration<double, std::milli> time = stop - start;
    if (!what.empty() && the_size)
        std::cout << std::fixed << std::setprecision(2)
                  << time << " for " << what << '\n';
}
 
int main()
{
    time_it(set_insert, "cache warming...");
    time_it(set_insert, "insert");
    time_it(set_insert, "insert");
    time_it(set_emplace, "emplace");
    time_it(set_emplace, "emplace");
}
```

## See also
- [emplace_hint](/cpp/container/set/emplace_hint/)
- [insert](/cpp/container/set/insert/)
