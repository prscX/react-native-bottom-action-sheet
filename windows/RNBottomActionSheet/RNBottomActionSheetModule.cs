using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Bottom.Action.Sheet.RNBottomActionSheet
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNBottomActionSheetModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNBottomActionSheetModule"/>.
        /// </summary>
        internal RNBottomActionSheetModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNBottomActionSheet";
            }
        }
    }
}
