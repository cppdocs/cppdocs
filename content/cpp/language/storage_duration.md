---
title: "Storage class specifiers"
source_path: "cpp/language/storage_duration"
category: "language"
---

The storage class specifiers are a part of the decl-specifier-seq of a name's [declaration syntax](/cpp/language/declarations/). Together with the [scope](/cpp/language/scope/) of the name, they control two independent properties of the name: its storage duration and its linkage.

## Notes
Names at the top-level namespace scope (file scope in C) that are const and not extern have external linkage in C, but internal linkage in C++.

Since C++11, auto is no longer a storage class specifier; it is used to indicate type deduction.

In C, the address of a register variable cannot be taken, but in C++, a variable declared register is semantically indistinguishable from a variable declared without any storage class specifiers.

In C++, unlike C, variables cannot be declared register.

Names of thread_local variables with internal or external linkage referred from different scopes may refer to the same or to different instances depending on whether the code is executing in the same or in different threads.

The extern keyword can also be used to specify [language linkage](/cpp/language/language_linkage/) and [explicit template instantiation declarations](/cpp/language/class_template/), but it's not a storage class specifier in those cases (except when a declaration is directly contained in a language linkage specification, in which case the declaration is treated as if it contains the extern specifier).

Storage class specifiers, except for thread_local, are not allowed on [explicit specializations](/cpp/language/template_specialization/) and [explicit instantiations](/cpp/language/class_template/#Explicit_instantiation):

A const (may be implied by constexpr) variable template used to have internal linkage by default, which was inconsistent with other templated entities. Defect report [CWG2387](https://cplusplus.github.io/CWG/issues/2387.html) corrected this.

## Example
```cpp
#include <iostream>
#include <mutex>
#include <string>
#include <thread>
 
thread_local unsigned int rage = 1;
std::mutex cout_mutex;
 
void increase_rage(const std::string& thread_name)
{
    ++rage; // modifying outside a lock is okay; this is a thread-local variable
    std::lock_guard<std::mutex> lock(cout_mutex);
    std::cout << "Rage counter for " << thread_name << ": " << rage << '\n';
}
 
int main()
{
    std::thread a(increase_rage, "a"), b(increase_rage, "b");
 
    {
        std::lock_guard<std::mutex> lock(cout_mutex);
        std::cout << "Rage counter for main: " << rage << '\n';
    }
 
    a.join();
    b.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 216 | C++98 | unnamed class and enumeration in class scope havedifferent linkage from those in namespace scope | they all have externallinkage in these scopes |
| CWG 389 | C++98 | a name with no linkage should not beused to declare an entity with linkage | a type without linkage shall not be usedas the type of a variable or functionwith linkage, unless the variableor function has C language linkage |
| CWG 426 | C++98 | an entity could be declared with both internaland external linkage in the same translation unit | the program is ill-formed in this case |
| CWG 527 | C++98 | the type restriction introduced by the resolution of CWG389 was also applied to variables and functions thatcannot be named outside their own translation units | the restriction is lifted for thesevariables and functions (i.e. with nolinkage or internal linkage, or declaredwithin unnamed namespaces) |
| CWG 809 | C++98 | register served very little function | deprecated |
| CWG 1648 | C++11 | static was implied even ifthread_local is combined with extern | implied only if no other storageclass specifier is present |
| CWG 1686 | C++98C++11 | the name of a non-static variable declared in namespacescope had internal linkage only if it is explicitlydeclared const (C++98) or constexpr (C++11) | only required the typeto be const-qualified |
| CWG 2019 | C++98 | the storage duration of referencemembers were unspecified | same as their complete object |
| CWG 2387 | C++14 | unclear whether const-qualified variabletemplate have internal linkage by default | const qualifier does not affectthe linkage of variabletemplates or their instances |
| CWG 2533 | C++98 | the storage duration of implicitly-created objects were unclear | made clear |
| CWG 2850 | C++98 | it was unclear when the storage forfunction parameters are deallocated | made clear |
| CWG 2872 | C++98 | the meaning of “can be referred to” was unclear | improved wording |
| P2788R0 | C++20 | declaring a const-qualified variable in a namespacegave it internal linkage even in a module unit | internal linkage is not given |

## See also
- [C documentation](/c/language/storage_duration/)
