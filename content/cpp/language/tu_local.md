---
title: "Translation-unit-local entities (since C++20)"
source_path: "cpp/language/tu_local"
category: "language"
since: "C++20"
---

Translation-unit-local (TU-local) entities are introduced to prevent entities that are supposed to be local (not used in any other translation unit) being exposed and used in other translation units.

## Example
```cpp
export module A;
static void f() {}
inline void it() { f(); }         // error: is an exposure of f
static inline void its() { f(); } // OK
template<int> void g() { its(); } // OK
template void g<0>();
 
decltype(f) *fp;                             // error: f (though not its type) is TU-local
auto &fr = f;                                // OK
constexpr auto &fr2 = fr;                    // error: is an exposure of f
constexpr static auto fp2 = fr;              // OK
struct S { void (&ref)(); } s{f};            // OK: value is TU-local
constexpr extern struct W { S &s; } wrap{s}; // OK: value is not TU-local
 
static auto x = []{ f(); }; // OK
auto x2 = x;                // error: the closure type is TU-local
int y = ([]{ f(); }(), 0);  // error: the closure type is not TU-local
int y2 = (x, 0);            // OK
 
namespace N
{
    struct A {};
    void adl(A);
    static void adl(int);
}
void adl(double);
 
inline void h(auto x) { adl(x); } // OK, but a specialization might be an exposure
```
