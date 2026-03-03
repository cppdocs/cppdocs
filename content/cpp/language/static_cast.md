---
title: "static_cast conversion"
source_path: "cpp/language/static_cast"
category: "language"
---

Converts between types using a combination of implicit and user-defined conversions.

## Notes
Base-to-derived conversions (downcasts) using static_cast make no runtime checks to ensure that the [dynamic type](/cpp/language/type-id/#Dynamic_type) of the pointed/referred object is Derived, and may only be used safely if this precondition is guaranteed by other means, such as when implementing [static polymorphism](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern#Static_polymorphism). Safe downcast may be done with [dynamic_cast](/cpp/language/dynamic_cast/).

static_cast may also be used to disambiguate function overloads by performing a function-to-pointer conversion to specific type, as in

## Example
```cpp
#include <iostream>
#include <vector>
 
struct B
{
    int m = 42;
    const char* hello() const
    {
        return "Hello world, this is B!\n";
    }
};
 
struct D : B
{
    const char* hello() const
    {
        return "Hello world, this is D!\n";
    }
};
 
enum class E { ONE = 1, TWO, THREE };
enum EU { ONE = 1, TWO, THREE };
 
int main()
{
    // 1. static downcast
    D d;
    B& br = d; // upcast via implicit conversion
    std::cout << "1) " << br.hello();
    D& another_d = static_cast<D&>(br); // downcast
    std::cout << "1) " << another_d.hello();
 
    // 3. lvalue to xvalue
    std::vector<int> v0{1, 2, 3};
    std::vector<int> v2 = static_cast<std::vector<int>&&>(v0);
    std::cout << "3) after move, v0.size() = " << v0.size() << '\n';
 
    // 4. discarded-value expression
    static_cast<void>(v2.size());
 
    // 5. initializing conversion
    int n = static_cast<int>(3.14);
    std::cout << "5) n = " << n << '\n';
    std::vector<int> v = static_cast<std::vector<int>>(10);
    std::cout << "5) v.size() = " << v.size() << '\n';
 
    // 6. inverse of implicit conversion
    void* nv = &n;
    int* ni = static_cast<int*>(nv);
    std::cout << "6) *ni = " << *ni << '\n';
 
    // 7a. scoped enum to int
    E e = E::TWO;
    int two = static_cast<int>(e);
    std::cout << "7a) " << two << '\n';
 
    // 7b. int to enum, enum to another enum
    E e2 = static_cast<E>(two);
    [[maybe_unused]]
    EU eu = static_cast<EU>(e2);
 
    // 7f. pointer to member upcast
    int D::*pm = &D::m;
    std::cout << "7f) " << br.*static_cast<int B::*>(pm) << '\n';
 
    // 7g. void* to any object pointer
    void* voidp = &e;
    [[maybe_unused]]
    std::vector<int>* p = static_cast<std::vector<int>*>(voidp);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 137 | C++98 | the constness and volatility ofpointers to void could be casted away | cv-qualifications cannot becasted away in such cases |
| CWG 427 | C++98 | downcast might be ambiguous with direct-initialization | selects downcast in this case |
| CWG 439 | C++98 | when converting a “pointer to object” to “pointer tovoid” then back to itself, it could only preserve itsvalue if the result type has the same cv-qualification | cv-qualificationmay be different |
| CWG 1094 | C++98 | the conversion from floating-point valuesto enumeration values was unspecified | specified |
| CWG 1320 | C++11 | the conversion from scoped enumerationvalues to bool was unspecified | specified |
| CWG 1412 | C++98 | the result of the conversion from“pointer tovoid” to “pointer to object” was unclear | made clear |
| CWG 1447 | C++11 | the conversion from bit-fields to rvalue referenceswas unspecified (cannot bind references to bit-fields) | specified |
| CWG 1766 | C++98 | the conversion from integral or enumeration values to enumerationvalues yielded unspecified result if expression is out of range | the behavior isundefined in this case |
| CWG 1832 | C++98 | the conversion from integral or enumeration values toenumeration values allowed target-type to be incomplete | not allowed |
| CWG 2224 | C++98 | the conversion from a member of base class type toits complete object of derived class type was valid | the behavior isundefined in this case |
| CWG 2254 | C++11 | a standard-layout class object with no data memberswas pointer-interconvertible to its first base class | it is pointer-interconvertibleto any of its base classes |
| CWG 2284 | C++11 | a non-standard-layout union object and a non-static datamember of that object were not pointer-interconvertible | they are |
| CWG 2310 | C++98 | for base-to-derived pointer conversions andderived-to-base pointer-to-member conversions,the derived class type could be incomplete | must be complete |
| CWG 2338 | C++11 | the conversion to enumeration types with fixed underlying typeresulted in undefined behavior if expression is out of range | convert to the underlying typefirst (no undefined behavior) |
| CWG 2499 | C++11 | a standard-layout class might have a non-pointer-interconvertiblebase class, even though all base subobjects have the same address | it does not have |
| CWG 2718 | C++98 | for base-to-derived reference conversions,the derived class type could be incomplete | must be complete |
| CWG 2882 | C++98 | it was unclear whether static_cast<void>(expr) attemptsto form an implicit conversion sequence from expr to void | no attempt in this case |

## See also
- [const_cast](/cpp/language/const_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [explicit cast](/cpp/language/explicit_cast/)
- [implicit conversions](/cpp/language/implicit_cast/)
