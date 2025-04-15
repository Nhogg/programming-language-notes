#ifndef SINGLETON_H_INCLUDED
#define SINGLETON_H_INCLUDED
#include "../common.h"

// This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.

namespace SINGLETON {

class Singleton { // Example: Room
  public:
  static Singleton *getInstance() {
    if (_pInstance == NULL) {
      _pInstance = new Singleton();
      cout << ".. instance created .. \n";
    }
    cout << ".. instance returned .. \n";
    return _pInstance;

    // Below local 'static' object, for single-threaded env's?
    //	    static Singleton s1;
    //	    return &s1;
  }
  static void disposeInstance() {
    // implement call through atexit() for automatic delete?

    if (_pInstance != NULL) {
      delete _pInstance;
      _pInstance = NULL;
      cout << ".. instance deleted .. \n\n";
    }
  }

  private:
  static Singleton *_pInstance;

  Singleton() {}
  Singleton(const Singleton &);            // looks no need of copy cons implementation
  Singleton &operator=(const Singleton &); // looks no need of asssignment operator implementation
};

Singleton *Singleton::_pInstance = NULL;

} // namespace SINGLETON

#endif // SINGLETON_H_INCLUDED
