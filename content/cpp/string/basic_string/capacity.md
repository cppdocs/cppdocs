---
title: "std::basic_string<CharT,Traits,Allocator>::capacity"
source_path: "cpp/string/basic_string/capacity"
category: "string"
---

Returns the number of characters that the string has currently allocated space for.

## Declarations
```cpp
size_type capacity() const;
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
Capacity of the currently allocated storage, i.e. the storage available for storing elements.

## Notes
Memory locations obtained from the allocator but not available for storing any element are not counted in the allocated storage. Note that the null terminator is not an element of the [std::basic_string](/cpp/string/basic_string/).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
void show_capacity(std::string const& s)
{
    std::cout << std::quoted(s) << " has capacity " << s.capacity() << ".\n";
}
 
int main()
{
    std::string s{"Exemplar"};
    show_capacity(s);
 
    s += " is an example string.";
    show_capacity(s);
 
    s.clear();
    show_capacity(s);
 
    std::cout << "\nDemonstrate the capacity's growth policy."
                 "\nSize:  Capacity:  Ratio:\n" << std::left;
 
    std::string g;
    auto old_cap{g.capacity()};
 
    for (int mark{}; mark != 5; ++mark)
    {
        while (old_cap == g.capacity())
            g.push_back('.');
 
        std::cout << std::setw( 7) << g.size()
                  << std::setw(11) << g.capacity()
                  << std::setw(10) << g.capacity() / static_cast<float>(old_cap) << '\n';
 
        old_cap = g.capacity();
    }
}
```

## See also
- [sizelength](/cpp/string/basic_string/size/)
- [reserve](/cpp/string/basic_string/reserve/)
