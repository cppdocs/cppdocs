---
title: "std::is_constant_evaluated"
source_path: "cpp/types/is_constant_evaluated"
header: "<type_traits>"
category: "types"
since: "C++20"
---

Detects whether the function call occurs within a constant-evaluated context. Returns true if the evaluation of the call occurs within the evaluation of an expression or conversion that is [manifestly constant-evaluated](/cpp/language/constant_expression/#Manifestly_constant-evaluated_expressions); otherwise returns false.

## Declarations
```cpp
constexpr bool is_constant_evaluated() noexcept;
```
_(since C++20)_

## Return value
true if the evaluation of the call occurs within the evaluation of an expression or conversion that is manifestly constant-evaluated; otherwise false.

## Notes
When directly used as the condition of [static_assert](/cpp/language/static_assert/) declaration or [constexpr if statement](/cpp/language/if/#constexpr_if), std::is_constant_evaluated() always returns true.

Because [if consteval](/cpp/language/if/#Consteval_if) is absent in C++20, std::is_constant_evaluated is typically implemented using a compiler extension.

## Example
```cpp
#include <cmath>
#include <iostream>
#include <type_traits>
 
constexpr double power(double b, int x)
{
    if (std::is_constant_evaluated() && !(b == 0.0 && x < 0))
    {
        // A constant-evaluation context: Use a constexpr-friendly algorithm.
        if (x == 0)
            return 1.0;
        double r {1.0};
        double p {x > 0 ? b : 1.0 / b};
        for (auto u = unsigned(x > 0 ? x : -x); u != 0; u /= 2)
        {
            if (u & 1)
                r *= p;
            p *= p;
        }
        return r;
    }
    else
    {
        // Let the code generator figure it out.
        return std::pow(b, double(x));
    }
}
 
int main()
{
    // A constant-expression context
    constexpr double kilo = power(10.0, 3);
    int n = 3;
    // Not a constant expression, because n cannot be converted to an rvalue
    // in a constant-expression context
    // Equivalent to std::pow(10.0, double(n))
    double mucho = power(10.0, n);
 
    std::cout << kilo << " " << mucho << "\n"; // (3)
}
```

## See also
- [constexpr specifier](/cpp/language/constexpr/)
- [consteval specifier](/cpp/language/consteval/)
- [constinit specifier](/cpp/language/constinit/)
- [zero initialization](/cpp/language/zero_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
