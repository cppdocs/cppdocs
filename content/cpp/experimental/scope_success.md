---
title: "std::experimental::scope_success"
source_path: "cpp/experimental/scope_success"
header: "<experimental/scope>"
category: "experimental"
---

The class template scope_success is a general-purpose scope guard intended to call its exit function when a scope is normally exited.

## Declarations
```cpp
template< class EF >
class scope_success;
```
_(library fundamentals TS v3)_

## Notes
Constructing a scope_success of dynamic storage duration might lead to unexpected behavior.

Constructing a scope_success is constructed from another scope_success created in a different thread might also lead to unexpected behavior since the count of uncaught exceptions obtained in different threads may be compared during the destruction.

If the EF stored in a scope_success object refers to a local variable of the function where it is defined, e.g., as a lambda capturing the variable by reference, and that variable is used as a return operand in that function, that variable might have already been returned when the scope_success's destructor executes, calling the exit function. This can lead to surprising behavior.

## Example
```cpp
#include <iostream>
#include <cstdlib>
#include <string_view>
#include <experimental/scope>
 
void print_exit_status(std::string_view name, bool exit_status, bool did_throw) {
  std::cout << name << ":\n";
  std::cout << "  Throwed exception  " << (did_throw ? "yes" : "no") << "\n";
  std::cout << "  Exit status        " << (exit_status ? "finished" : "pending") << "\n\n";
}
 
// Randomly throw an exception (50% chance)
void maybe_throw() {
    if (std::rand() >= RAND_MAX / 2)
        throw std::exception{};
}
 
int main() {
  bool exit_status{false}, did_throw{false};
 
  // Manual handling at "end of scope"
  try {
    maybe_throw();
    exit_status = true; 
  } catch (...) { did_throw = true; }
  print_exit_status("Manual handling", exit_status, did_throw);
 
  // Using scope_exit: runs on scope exit (success or exception)
  exit_status = did_throw = false;
  try {
    auto guard = std::experimental::scope_exit{[&]{ exit_status = true; } };
    maybe_throw();
  } catch (...) { did_throw = true; }
  print_exit_status("scope_exit", exit_status, did_throw);
 
  // Using scope_fail: runs only if an exception occurs
  exit_status = did_throw = false;
  try {
    auto guard = std::experimental::scope_fail{[&]{ exit_status = true; } };
    maybe_throw();
  } catch (...) { did_throw = true; }
  print_exit_status("scope_fail", exit_status, did_throw);
 
  // Using scope_success: runs only if no exception occurs
  exit_status = did_throw = false;
  try {
    auto guard = std::experimental::scope_success{[&]{ exit_status = true; } };
    maybe_throw();
  } catch (...) { did_throw = true; }
  print_exit_status("scope_success", exit_status, did_throw);
}
```

## See also
- [scope_exit](/cpp/experimental/scope_exit/)
- [scope_fail](/cpp/experimental/scope_fail/)
- [default_delete](/cpp/memory/default_delete/)
- [unique_ptr](/cpp/memory/unique_ptr/)
