---
title: "std::longjmp"
source_path: "cpp/utility/program/longjmp"
header: "<csetjmp>"
category: "utility"
since: "C++17"
---

Loads the execution context env saved by a previous call to [setjmp](/cpp/utility/program/setjmp/). This function does not return. Control is transferred to the call site of the macro [setjmp](/cpp/utility/program/setjmp/) that set up env. That [setjmp](/cpp/utility/program/setjmp/) then returns the value, passed as the status.

## Declarations
```cpp
void longjmp( std::jmp_buf env, int status );
```
_(until C++17)_

```cpp
[[noreturn]] void longjmp( std::jmp_buf env, int status );
```
_(since C++17)_

## Parameters
- `env`: variable referring to the execution state of the program saved by setjmp
- `status`: the value to return from setjmp. If it is equal to 0, 1 is used instead

## Return value
(none)

## Notes
std::longjmp is the mechanism used in C to handle unexpected error conditions where the function cannot return meaningfully. C++ generally uses [exception handling](/cpp/language/exceptions/) for this purpose.

## Example
```cpp
#include <array>
#include <cmath>
#include <csetjmp>
#include <cstdlib>
#include <format>
#include <iostream>
 
std::jmp_buf solver_error_handler;
 
std::array<double, 2> solve_quadratic_equation(double a, double b, double c)
{
    const double discriminant = b * b - 4.0 * a * c;
    if (discriminant < 0)
        std::longjmp(solver_error_handler, true); // Go to error handler
 
    const double delta = std::sqrt(discriminant) / (2.0 * a);
    const double argmin = -b / (2.0 * a);
    return {argmin - delta, argmin + delta};
}
 
void show_quadratic_equation_solution(double a, double b, double c)
{
    std::cout << std::format("Solving {}x² + {}x + {} = 0...\n", a, b, c);
    auto [x_0, x_1] = solve_quadratic_equation(a, b, c);
    std::cout << std::format("x₁ = {}, x₂ = {}\n\n", x_0, x_1);
}
 
int main()
{
    if (setjmp(solver_error_handler))
    {
        // Error handler for solver
        std::cout << "No real solution\n";
        return EXIT_FAILURE;
    }
 
    for (auto [a, b, c] : {std::array{1, -3, 2}, {2, -3, -2}, {1, 2, 3}})
        show_quadratic_equation_solution(a, b, c);
 
    return EXIT_SUCCESS;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 619 | C++98 | the wording of the extra restrictions in C++ was vague | improved the wording |
| LWG 894 | C++98 | the behavior was undefined if replacingstd::longjmp with throw and setjmp withcatch would destroy any automatic object | the behavior is only undefinedif a non-trivial destructor forany automatic object is invoked |

## See also
- [setjmp](/cpp/utility/program/setjmp/)
- [C documentation](/c/program/longjmp/)
