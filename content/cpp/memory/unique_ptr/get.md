---
title: "std::unique_ptr<T,Deleter>::get"
source_path: "cpp/memory/unique_ptr/get"
category: "memory"
---

Returns a pointer to the managed object or nullptr if no object is owned.

## Declarations
```cpp
pointer get() const noexcept;
```
_(since C++11) (constexpr since C++23)_

## Return value
Pointer to the managed object or nullptr if no object is owned.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
#include <utility>
 
class Res
{
    std::string s;
 
public:
    Res(std::string arg) : s{std::move(arg)}
    {
        std::cout << "Res::Res(" << std::quoted(s) << ");\n";
    }
 
    ~Res()
    {
        std::cout << "Res::~Res();\n";
    }
 
private:
    friend std::ostream& operator<<(std::ostream& os, Res const& r)
    {
        return os << "Res { s = " << std::quoted(r.s) << "; }";
    }
};
 
int main()
{
    std::unique_ptr<Res> up(new Res{"Hello, world!"});
    Res* res = up.get();
    std::cout << *res << '\n';
}
```

## See also
- [release](/cpp/memory/unique_ptr/release/)
