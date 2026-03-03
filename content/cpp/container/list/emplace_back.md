---
title: "std::list<T,Allocator>::emplace_back"
source_path: "cpp/container/list/emplace_back"
category: "container"
since: "C++17"
---

Appends a new element to the end of the container. The element is constructed through [std::allocator_traits::construct](/cpp/memory/allocator_traits/construct/), which typically uses placement-new to construct the element in-place at the location provided by the container. The arguments args... are forwarded to the constructor as [std::forward](/cpp/utility/forward/)<Args>(args)....

## Declarations
```cpp
template< class... Args >
void emplace_back( Args&&... args );
```
_(since C++11) (until C++17)_

```cpp
template< class... Args >
reference emplace_back( Args&&... args );
```
_(since C++17)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
(none)

## Example
```cpp
#include <list>
#include <cassert>
#include <iostream>
#include <string>
 
struct President
{
    std::string name;
    std::string country;
    int year;
 
    President(std::string p_name, std::string p_country, int p_year)
        : name(std::move(p_name)), country(std::move(p_country)), year(p_year)
    {
        std::cout << "I am being constructed.\n";
    }
 
    President(President&& other)
        : name(std::move(other.name)), country(std::move(other.country)), year(other.year)
    {
        std::cout << "I am being moved.\n";
    }
 
    President& operator=(const President& other) = default;
};
 
int main()
{
    std::list<President> elections;
    std::cout << "emplace_back:\n";
    auto& ref = elections.emplace_back("Nelson Mandela", "South Africa", 1994);
    assert(ref.year == 1994 && "uses a reference to the created object (C++17)");
 
    std::list<President> reElections;
    std::cout << "\npush_back:\n";
    reElections.push_back(President("Franklin Delano Roosevelt", "the USA", 1936));
 
    std::cout << "\nContents:\n";
    for (President const& president: elections)
        std::cout << president.name << " was elected president of "
                  << president.country << " in " << president.year << ".\n";
 
    for (President const& president: reElections)
        std::cout << president.name << " was re-elected president of "
                  << president.country << " in " << president.year << ".\n";
}
```

## See also
- [push_back](/cpp/container/list/push_back/)
- [emplace](/cpp/container/list/emplace/)
