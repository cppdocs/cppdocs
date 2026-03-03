---
title: "std::recursive_mutex"
source_path: "cpp/thread/recursive_mutex"
header: "<mutex>"
category: "thread"
since: "C++11"
---

The recursive_mutex class is a synchronization primitive that can be used to protect shared data from being simultaneously accessed by multiple threads.

## Declarations
```cpp
class recursive_mutex;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <mutex>
#include <thread>
 
class X
{
    std::recursive_mutex m;
    std::string shared;
public:
    void fun1()
    {
        std::lock_guard<std::recursive_mutex> lk(m);
        shared = "fun1";
        std::cout << "in fun1, shared variable is now " << shared << '\n';
    }
    void fun2()
    {
        std::lock_guard<std::recursive_mutex> lk(m);
        shared = "fun2";
        std::cout << "in fun2, shared variable is now " << shared << '\n';
        fun1(); // recursive lock becomes useful here
        std::cout << "back in fun2, shared variable is " << shared << '\n';
    }
};
 
int main() 
{
    X x;
    std::thread t1(&X::fun1, &x);
    std::thread t2(&X::fun2, &x);
    t1.join();
    t2.join();
}
```

## See also
- [mutex](/cpp/thread/mutex/)
