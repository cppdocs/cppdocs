---
title: "std::atomic"
source_path: "cpp/atomic/atomic"
header: "<atomic>"
---

Each instantiation and full specialization of the std::atomic template defines an atomic type. If one thread writes to an atomic object while another thread reads from it, the behavior is well-defined (see [memory model](/cpp/language/memory_model/) for details on data races).

## Declarations
```cpp
template< class T >
struct atomic;
```
_(since C++11)_

```cpp
template< class U >
struct atomic<U*>;
```
_(since C++11)_

```cpp
template< class U >
struct atomic<std::shared_ptr<U>>;
```
_(since C++20)_

```cpp
template< class U >
struct atomic<std::weak_ptr<U>>;
```
_(since C++20)_

```cpp
#define _Atomic(T) /* see below */
```
_(since C++23)_

## Notes
There are non-member function template equivalents for all member functions of std::atomic. Those non-member functions may be additionally overloaded for types that are not specializations of std::atomic, but are able to guarantee atomicity. The only such type in the standard library is [std::shared_ptr](/cpp/memory/shared_ptr/)<U>.

_Atomic is a [keyword](/c/keyword/_Atomic/) and used to provide [atomic types](/c/language/atomic/) in C.

Implementations are recommended to ensure that the representation of _Atomic(T) in C is same as that of std::atomic<T> in C++ for every possible type T. The mechanisms used to ensure atomicity and memory ordering should be compatible.

On GCC and Clang, some of the functionality described here requires linking against -latomic.

## Example
```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>
 
std::atomic_int acnt;
int cnt;
 
void f()
{
    for (auto n{10000}; n; --n)
    {
        ++acnt;
        ++cnt;
        // Note: for this example, relaxed memory order is sufficient,
        // e.g. acnt.fetch_add(1, std::memory_order_relaxed);
    }
}
 
int main()
{
    {
        std::vector<std::jthread> pool;
        for (int n = 0; n < 10; ++n)
            pool.emplace_back(f);
    }
 
    std::cout << "The atomic counter is " << acnt << '\n'
              << "The non-atomic counter is " << cnt << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2441 | C++11 | typedefs for atomic versions of optionalfixed width integer types were missing | added |
| LWG 3012 | C++11 | std::atomic<T> was permitted for any Tthat is trivially copyable but not copyable | such specializations are forbidden |
| LWG 3949 | C++17 | the wording requiring std::atomic<bool> to have atrivial destructor was accidently dropped in C++17 | added back |
| LWG 4069(P3323R1) | C++11 | support for cv-qualified T was questionable | disallow T being cv-qualified |
| P0558R1 | C++11 | template argument deduction for somefunctions for atomic types might accidentlyfail; invalid pointer operations were provided | specification was substantially rewritten:member typedefs value_typeand difference_type are added |

## See also
- [atomic_flag](/cpp/atomic/atomic_flag/)
- [std::atomic<std::shared_ptr>](/cpp/memory/shared_ptr/atomic2/)
- [std::atomic<std::weak_ptr>](/cpp/memory/weak_ptr/atomic2/)
- [C documentation](/c/language/atomic/)
