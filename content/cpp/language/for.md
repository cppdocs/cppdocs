---
title: "for loop"
source_path: "cpp/language/for"
category: "language"
---

Conditionally executes a statement repeatedly, where the statement does not need to manage the loop condition.

## Notes
As is the case with [while](/cpp/language/while/) loop, if statement is not a compound statement, the scope of variables declared in it is limited to the loop body as if it was a compound statement.

As part of the C++ [forward progress guarantee](/cpp/language/multithread/#Progress_guarantee), the behavior is [undefined](/cpp/language/ub/) if a loopthat is not a [trivial infinite loop](/cpp/language/multithread/#Trivial_infinite_loops)(since C++26) without [observable behavior](/cpp/language/as_if/) does not terminate. Compilers are permitted to remove such loops.

While in C names declared in the scope of init-statement and condition can be shadowed in the scope of statement, it is forbidden in C++:

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    std::cout << "1) typical loop with a single statement as the body:\n";
    for (int i = 0; i < 10; ++i)
        std::cout << i << ' ';
 
    std::cout << "\n\n" "2) init-statement can declare multiple names, as\n"
                 "long as they can use the same decl-specifier-seq:\n";
    for (int i = 0, *p = &i; i < 9; i += 2)
        std::cout << i << ':' << *p << ' ';
 
    std::cout << "\n\n" "3) condition may be a declaration:\n";
    char cstr[] = "Hello";
    for (int n = 0; char c = cstr[n]; ++n)
        std::cout << c;
 
    std::cout << "\n\n" "4) init-statement can use the auto type specifier:\n";
    std::vector<int> v = {3, 1, 4, 1, 5, 9};
    for (auto iter = v.begin(); iter != v.end(); ++iter)
        std::cout << *iter << ' ';
 
    std::cout << "\n\n" "5) init-statement can be an expression:\n";
    int n = 0;
    for (std::cout << "Loop start\n";
         std::cout << "Loop test\n";
         std::cout << "Iteration " << ++n << '\n')
    {
        if (n > 1)
            break;
    }
 
    std::cout << "\n" "6) constructors and destructors of objects created\n"
                 "in the loop's body are called per each iteration:\n";
    struct S
    {
        S(int x, int y) { std::cout << "S::S(" << x << ", " << y << "); "; }
        ~S() { std::cout << "S::~S()\n"; }
    };
    for (int i{0}, j{5}; i < j; ++i, --j)
        S s{i, j};
 
    std::cout << "\n" "7) init-statement can use structured bindings:\n";
    long arr[]{1, 3, 7};
    for (auto [i, j, k] = arr; i + j < k; ++i)
        std::cout << i + j << ' ';
    std::cout << '\n';
}
```

## See also
- [range-for loop](/cpp/language/range-for/)
- [C documentation](/c/language/for/)
