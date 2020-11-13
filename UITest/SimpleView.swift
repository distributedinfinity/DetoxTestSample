
import SwiftUI

struct SimpleView: View {
    
    init() {}
    
    var title: String {
        return NSLocalizedString("simple view title", comment: "Title of simple view")
    }
    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 0) {
                List() {
                    self.infoSection
                }
                .listStyle(GroupedListStyle())
                .environment(\.horizontalSizeClass, .regular)
                .navigationBarTitle(Text(self.title), displayMode: .inline)
            }
        }
    }
    
    private var infoSection: some View {
        HStack {
            Image("Open Loop")
            Text("info text")
                .font(.footnote)
                .foregroundColor(.secondary)
            infoButton
        }
    }
    
    private var infoButton: some View {
        Button(
            action: {
                //Nothing to see here
            },
            label: {
                Image(systemName: "info.circle")
                    .font(.system(size: 25))
                    .foregroundColor(.accentColor)
            }
        )
    }
}
