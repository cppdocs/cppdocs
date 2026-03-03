---
title: "std::priority_queue<T,Container,Compare>::swap"
source_path: "cpp/container/priority_queue/swap"
category: "container"
since: "C++11"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
void swap( priority_queue& other ) noexcept(/* see below */);
```
_(since C++11)_

## Parameters
- `other`: container adaptor to exchange the contents with

## Return value
(none)

## Notes
Some implementations (e.g. libc++) provide the swap member function as an extension to pre-C++11 modes.

## Example
```cpp
#include <iostream>
#include <concepts>
#include <functional>
#include <queue>
#include <string>
#include <string_view>
#include <vector>
 
template<typename Adaptor>
requires (std::ranges::input_range<typename Adaptor::container_type>)
void print(std::string_view name, const Adaptor& adaptor)
{
    struct Printer : Adaptor // to use protected Adaptor::Container c;
    {
        void print(std::string_view name) const
        {
            std::cout << name << " [" << std::size(this->c) << "]: ";
            for (auto const& elem : this->c)
                std::cout << elem << ' ';
            std::cout << '\n';
        }
    };
 
    static_cast<Printer const&>(adaptor).print(name);
}
 
int main()
{
    std::vector<std::string> v1{"1","2","3","4"},
                             v2{"Ɐ","B","Ɔ","D","Ǝ"};
 
    std::priority_queue s1(std::less<>(), std::move(v1));
    std::priority_queue s2(std::less<>(), std::move(v2));
 
    print("s1", s1);
    print("s2", s2);
 
    s1.swap(s2);
 
    print("s1", s1);
    print("s2", s2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2456 | C++11 | the noexcept specification is ill-formed | made to work |

## See also
- [std::swap(std::priority_queue)](/cpp/container/priority_queue/swap2/)
- [std::swap](/cpp/utility/swap/)
