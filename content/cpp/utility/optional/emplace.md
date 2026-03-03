---
title: "std::optional<T>::emplace"
source_path: "cpp/utility/optional/emplace"
category: "utility"
---

Constructs the contained value in-place. If *this already contains a value before the call, the contained value is destroyed by calling its destructor.

## Declarations
```cpp
template< class... Args >
T& emplace( Args&&... args );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class U, class... Args >
T& emplace( std::initializer_list<U> ilist, Args&&... args );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `args...`: the arguments to pass to the constructor
- `ilist`: the initializer list to pass to the constructor

## Return value
A reference to the new contained value.

## Example
```cpp
#include <iostream>
#include <optional>
 
struct A
{
    std::string s;
 
    A(std::string str) : s(std::move(str)), id{n++} { note("+ constructed"); }
    ~A() { note("~ destructed"); }
    A(const A& o) : s(o.s), id{n++} { note("+ copy constructed"); }
    A(A&& o) : s(std::move(o.s)), id{n++} { note("+ move constructed"); }
 
    A& operator=(const A& other)
    {
        s = other.s;
        note("= copy assigned");
        return *this;
    }
 
    A& operator=(A&& other)
    {
        s = std::move(other.s);
        note("= move assigned");
        return *this;
    }
 
    inline static int n{};
    int id{};
    void note(auto s) { std::cout << "  " << s << " #" << id << '\n'; }
};
 
int main()
{
    std::optional<A> opt;
 
    std::cout << "Assign:\n";
    opt = A("Lorem ipsum dolor sit amet, consectetur adipiscing elit nec.");
 
    std::cout << "Emplace:\n";
    // As opt contains a value it will also destroy that value
    opt.emplace("Lorem ipsum dolor sit amet, consectetur efficitur.");
 
    std::cout << "End example\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | emplace was not constexpr while the required operations can be constexpr in C++20 | made constexpr |

## See also
- [operator=](/cpp/utility/optional/operator/)
