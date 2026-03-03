---
title: "std::defer_lock, std::try_to_lock, std::adopt_lock, std::defer_lock_t, std::try_to_lock_t, std::adopt_lock_t"
source_path: "cpp/thread/lock_tag_t"
header: "<mutex>"
category: "thread"
since: "C++11"
---

1,3,5) The empty class tag types std::defer_lock_t, std::try_to_lock_t and std::adopt_lock_t can be used in the constructor's parameter list for [std::unique_lock](/cpp/thread/unique_lock/) and [std::shared_lock](/cpp/thread/shared_lock/) to specify locking strategy.

## Declarations
```cpp
struct defer_lock_t { explicit defer_lock_t() = default; };
```
_(since C++11)_

```cpp
constexpr std::defer_lock_t defer_lock {};
```
_(since C++11) (inline since C++17)_

```cpp
struct try_to_lock_t { explicit try_to_lock_t() = default; };
```
_(since C++11)_

```cpp
constexpr std::try_to_lock_t try_to_lock {};
```
_(since C++11) (inline since C++17)_

```cpp
struct adopt_lock_t { explicit adopt_lock_t() = default; };
```
_(since C++11)_

```cpp
constexpr std::adopt_lock_t adopt_lock {};
```
_(since C++11) (inline since C++17)_

## Example
```cpp
#include <iostream>
#include <mutex>
#include <thread>
 
struct bank_account
{
    explicit bank_account(int balance) : balance{balance} {}
    int balance;
    std::mutex m;
};
 
void transfer(bank_account& from, bank_account& to, int amount)
{
    if (&from == &to) // avoid deadlock in case of self transfer
        return;
 
    // lock both mutexes without deadlock
    std::lock(from.m, to.m);
    // make sure both already-locked mutexes are unlocked at the end of scope
    std::lock_guard lock1{from.m, std::adopt_lock};
    std::lock_guard lock2{to.m, std::adopt_lock};
 
// equivalent approach:
//  std::unique_lock<std::mutex> lock1{from.m, std::defer_lock};
//  std::unique_lock<std::mutex> lock2{to.m, std::defer_lock};
//  std::lock(lock1, lock2);
 
    from.balance -= amount;
    to.balance += amount;
}
 
int main()
{
    bank_account my_account{100};
    bank_account your_account{50};
 
    std::thread t1{transfer, std::ref(my_account), std::ref(your_account), 10};
    std::thread t2{transfer, std::ref(your_account), std::ref(my_account), 5};
 
    t1.join();
    t2.join();
 
    std::cout << "my_account.balance = " << my_account.balance << "\n"
                 "your_account.balance = " << your_account.balance << '\n';
}
```

## See also
- [(constructor)](/cpp/thread/lock_guard/lock_guard/)
- [(constructor)](/cpp/thread/unique_lock/unique_lock/)
