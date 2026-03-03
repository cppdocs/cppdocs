---
title: "constexpr specifier (since C++11)"
source_path: "cpp/language/constexpr"
category: "language"
since: "C++11"
---

constexpr - specifies that the value of a variable, [structured binding](/cpp/language/structured_binding/)(since C++26) or function can appear in [constant expressions](/cpp/language/constant_expression/)

## Notes
Because the [noexcept](/cpp/language/noexcept/) operator always returns true for a constant expression, it can be used to check if a particular invocation of a constexpr function takes the constant expression branch:

It is possible to write a constexpr function whose invocation can never satisfy the requirements of a core constant expression:

Constexpr constructors are permitted for classes that are not literal types. For example, the default constructor of [std::shared_ptr](/cpp/memory/shared_ptr/) is constexpr, allowing [constant initialization](/cpp/language/constant_initialization/).

Reference variables can be declared constexpr (their initializers have to be [reference constant expressions](/cpp/language/constant_expression/#Constant_expression)):

Even though try blocks and inline assembly are allowed in constexpr functions, throwing exceptions that are uncaught(since C++26) or executing the assembly is still disallowed in a constant expression.

If a variable has constant destruction, there is no need to generate machine code in order to call destructor for it, even if its destructor is not trivial.

A non-lambda, non-special-member, and non-templated constexpr function cannot implicitly become an immediate function. Users need to explicitly mark it consteval to make such an intended function definition well-formed.

## Example
```cpp
#include <iostream>
#include <stdexcept>
 
// C++11 constexpr functions use recursion rather than iteration
constexpr int factorial(int n)
{
    return n <= 1 ? 1 : (n * factorial(n - 1));
}
 
// C++14 constexpr functions may use local variables and loops
#if __cplusplus >= 201402L
constexpr int factorial_cxx14(int n)
{
    int res = 1;
    while (n > 1)
        res *= n--;
    return res;
}
#endif // C++14
 
// A literal class
class conststr
{
    const char* p;
    std::size_t sz;
public:
    template<std::size_t N>
    constexpr conststr(const char(&a)[N]): p(a), sz(N - 1) {}
 
    // constexpr functions signal errors by throwing exceptions
    // in C++11, they must do so from the conditional operator ?:
    constexpr char operator[](std::size_t n) const
    {
        return n < sz ? p[n] : throw std::out_of_range("");
    }
 
    constexpr std::size_t size() const { return sz; }
};
 
// C++11 constexpr functions had to put everything in a single return statement
// (C++14 does not have that requirement)
constexpr std::size_t countlower(conststr s, std::size_t n = 0,
                                             std::size_t c = 0)
{
    return n == s.size() ? c :
        'a' <= s[n] && s[n] <= 'z' ? countlower(s, n + 1, c + 1)
                                   : countlower(s, n + 1, c);
}
 
// An output function that requires a compile-time constant, for testing
template<int n>
struct constN
{
    constN() { std::cout << n << '\n'; }
};
 
int main()
{
    std::cout << "4! = ";
    constN<factorial(4)> out1; // computed at compile time
 
    volatile int k = 8; // disallow optimization using volatile
    std::cout << k << "! = " << factorial(k) << '\n'; // computed at run time
 
    std::cout << "The number of lowercase letters in \"Hello, world!\" is ";
    constN<countlower("Hello, world!")> out2; // implicitly converted to conststr
 
    constexpr int a[12] = {0, 1, 2, 3, 4, 5, 6, 7, 8};
    constexpr int length_a = sizeof a / sizeof(int); // std::size(a) in C++17,
                                                      // std::ssize(a) in C++20
    std::cout << "Array of length " << length_a << " has elements: ";
    for (int i = 0; i < length_a; ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1358 | C++11 | templated constexpr functions also neededto have at least one valid argument value | no need |
| CWG 1359 | C++11 | constexpr union constructorsmust initialize all data members | initializes exactly one datamember for non-empty unions |
| CWG 1366 | C++11 | classes with constexpr constructors whose function bodiesare = default or = delete could have virtual base classes | such classes can neitherhave virtual base classes |
| CWG 1595 | C++11 | constexpr delegating constructors requiredall involved constructors to be constexpr | only requires the targetconstructor to be constexpr |
| CWG 1712 | C++14 | a constexpr variable template was required to haveall its declarations contain the constexpr specifier[1] | not required anymore |
| CWG 1911 | C++11 | constexpr constructors for non-literal types were not allowed | allowed in constant initialization |
| CWG 2004 | C++11 | copy/move of a union with a mutable memberwas allowed in a constant expression | mutable variants disqualifyimplicit copy/move |
| CWG 2022 | C++98 | whether equivalent constexpr and non-constexprfunction produce equal result might dependon whether copy elision is performed | assume that copy elision is alwaysperformed in constant expressions |
| CWG 2163 | C++14 | labels were allowed in constexpr functionseven though goto statements are prohibited | labels also prohibited |
| CWG 2268 | C++11 | copy/move of a union with a mutable member wasprohibited by the resolution of CWG issue 2004 | allowed if the object is createdwithin the constant expression |
| CWG 2278 | C++98 | the resolution of CWG issue 2022 was not implementable | assume that copy elision is neverperformed in constant expressions |
| CWG 2531 | C++11 | a non-inline variable became inlineif it is redeclared with constexpr | the variable doesnot become inline |

## See also
- [constant expression](/cpp/language/constant_expression/)
- [expression](/cpp/language/expressions/)
- [consteval specifier](/cpp/language/consteval/)
- [constinit specifier](/cpp/language/constinit/)
- [zero initialization](/cpp/language/zero_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [C documentation](/c/language/constexpr/)
