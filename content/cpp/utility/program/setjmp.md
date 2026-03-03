---
title: "setjmp"
source_path: "cpp/utility/program/setjmp"
header: "<csetjmp>"
category: "utility"
---

Saves the current execution context into a variable env of type [std::jmp_buf](/cpp/utility/program/jmp_buf/). This variable can later be used to restore the current execution context by [std::longjmp](/cpp/utility/program/longjmp/) function. That is, when a call to [std::longjmp](/cpp/utility/program/longjmp/) function is made, the execution continues at the particular call site that constructed the [std::jmp_buf](/cpp/utility/program/jmp_buf/) variable passed to [std::longjmp](/cpp/utility/program/longjmp/). In that case setjmp returns the value passed to [std::longjmp](/cpp/utility/program/longjmp/).

## Declarations
```cpp
#define setjmp(env) /* implementation-defined */
```

## Parameters
- `env`: variable to save the execution state of the program to

## Return value
0 if the macro was called by the original code and the execution context was saved to env.

## Notes
Above requirements forbid using return value of setjmp in data flow (e.g. to initialize or assign an object with it). The return value can only be either used in control flow or discarded.

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

## See also
- [longjmp](/cpp/utility/program/longjmp/)
- [C documentation](/c/program/setjmp/)
