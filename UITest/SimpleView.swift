
import SwiftUI

struct SimpleView: View {
    
    init() {}
    @State private var showingAlert = false
    
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

        .alert(isPresented: $showingAlert) {
            Alert(title: Text("Alert"), message: Text("Alert message"), dismissButton: .default(Text("Dismiss")))
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
                self.showingAlert = true
            },
            label: {
                Image(systemName: "info.circle")
                    .font(.system(size: 25))
                    .foregroundColor(.accentColor)
            }
        )
    }
}
