---
title: "std::chrono::weekday::ok"
source_path: "cpp/chrono/weekday/ok"
category: "chrono"
since: "C++20"
---

Checks if the weekday value stored in *this is in the valid range, i.e., [0,6].

## Declarations
```cpp
constexpr bool ok() const noexcept;
```
_(since C++20)_

## Return value
true if the weekday value stored in *this is in the range [0,6]. Otherwise false.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <locale>
#include <string>
 
struct weekday_ok : std::numpunct<char>
{
    std::string do_truename()  const override { return " (is valid weekday)"; }
    std::string do_falsename() const override { return " (is not valid weekday)"; }
};
 
int main()
{
    std::cout.imbue(std::locale(std::cout.getloc(), new weekday_ok));
    std::cout << std::boolalpha;
 
    for (const unsigned u : {0 /* Sun */, 1 /* Mon */, 6, 7 /* Sun */, 8, 9})
    {
        const std::chrono::weekday wd{u};
        std::cout << "u: " << u << "; wd: " << wd.c_encoding() << wd.ok() << '\n';
    }
}
```

## See also
- [c_encodingiso_encoding](/cpp/chrono/weekday/encoding/)
